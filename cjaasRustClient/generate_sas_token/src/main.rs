pub mod sas_token;

use clap::{App, Arg};
use sas_token::utils::create_sas_token;
use std::vec::Vec;
use urlencoding::encode;

fn main() {
    let matches = App::new("Generate SAS Token")
        .version("0.1.0")
        .author("VenkiV <v3nki@cisco.com>")
        .about("Generates SharedAccessSignature for Cjaas out of a given secret key")
        .arg(
            Arg::with_name("secret")
                .takes_value(true)
                .required(true)
                .help("Secret Tenant Key from CJaaS Admin Portal"),
        )
        .arg(
            Arg::with_name("organization")
                .short("o")
                .long("organization")
                .required(true)
                .takes_value(true)
                .help("Organization name"),
        )
        .arg(
            Arg::with_name("namespace")
                .short("n")
                .required(true)
                .long("namespace")
                .takes_value(true)
                .help("Namespace name"),
        )
        .arg(
            Arg::with_name("service")
                .short("s")
                .long("service")
                .takes_value(true)
                .help("Particular Service to be used"),
        )
        .arg(
            Arg::with_name("permission")
                .short("p")
                .required(true)
                .long("permission")
                .takes_value(true)
                .help("One of the following permissions (r|w|rw)"),
        )
        .arg(
            Arg::with_name("keyname")
                .short("k")
                .required(true)
                .long("keyname")
                .takes_value(true)
                .help("KeyName/AppName from admin portal"),
        )
        .arg(
            Arg::with_name("validityDays")
                .short("d")
                .required(true)
                .long("days")
                .takes_value(true)
                .help("Validity in Days"),
        )
        .arg(
            Arg::with_name("validityHours")
                .short("h")
                .long("hours")
                .takes_value(true)
                .help("Validity in Hours"),
        )
        .arg(
            Arg::with_name("forGadget")
                .long("for-gadget")
                .help("Generates Finesse Gadget compatible Query string of SASTokens"),
        )
        .get_matches();

    let tenant_key = matches.value_of("secret").unwrap();
    let org = matches.value_of("organization").unwrap();
    let namespace = matches.value_of("namespace").unwrap();
    let permission = matches.value_of("permission").unwrap(); //"r"; //"w";
    let key_name = matches.value_of("keyname").unwrap();
    let validity_days: u32 = matches.value_of("validityDays").unwrap().parse().unwrap();
    let validity_hours: u32 = match matches.value_of("validityHours") {
        Some(string) => string.parse().unwrap(),
        None => 0,
    };

    let for_gadget: bool = matches.is_present("forGadget");

    let services = [
        ("profile", "r", "profileReadToken"),
        ("profile", "w", "profileWriteToken"),
        ("stream", "r", "streamToken"),
        ("tape", "r", "tapeToken"),
        ("ds", "w", "datasinkWriteToken"),
        ("idmt", "r", "identityReadToken"),
        ("idmt", "w", "identityWriteToken"),
        ("action", "w", "actionWriteToken"),
        ("action", "r", "actionReadToken"),
        ("account", "r", "accountReadToken"),
    ];

    let services_for_gadget: Vec<_> = vec!["profile", "stream", "tape", "idmt"];

    match matches.value_of("service") {
        Some(service) => {
            let sas_token = create_sas_token(
                tenant_key,
                org,
                namespace,
                service,
                permission,
                key_name,
                validity_days,
                validity_hours,
            );
            println!("------------------SAS String----------------");
            println!("SharedAccessSignature {}", sas_token);
        }
        None => {
            let mut sas_tokens: Vec<(String, String)> = Vec::new();

            for service in services.iter() {
                let sas_token = create_sas_token(
                    tenant_key,
                    org,
                    namespace,
                    service.0,
                    service.1,
                    key_name,
                    validity_days,
                    validity_hours,
                );

                if for_gadget && services_for_gadget.contains(&service.0) {
                    sas_tokens.push((sas_token.clone(), service.2.to_string()));
                };

                println!(
                    "------------------SAS String for {} with {} permission---------------",
                    service.0, service.1
                );
                println!("SharedAccessSignature {}", sas_token);
                println!();
            }

            let mut query_string = "?".to_owned();

            let mut count = 0;
            for sas_token in sas_tokens.iter() {
                query_string.push_str(&sas_token.1);
                query_string.push_str("=");
                query_string.push_str(&encode(&sas_token.0));
                if count != sas_tokens.len() - 1 {
                    query_string.push_str("&");
                }
                count = count + 1;
            }

            println!("-----------------------Query String for Customer Journey Gadget----------------------");
            println!("SharedAccessSignature {}", query_string);
            println!();
        }
    };
}
