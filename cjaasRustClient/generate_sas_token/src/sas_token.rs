use chrono::prelude::*;
use chrono::Duration;
use hmac::{Hmac, Mac, NewMac};
use std::convert::TryInto;
type HmacSha256 = Hmac<Sha256>;
use sha2::Sha256;
use urlencoding::encode;

pub mod utils {

  use super::*;
  pub fn create_sas_token(
    tenant_key: &str,
    org: &str,
    namespace: &str,
    service: &str,
    permission: &str,
    key_name: &str,
    validity_days: u32,
    validity_hours: u32,
  ) -> String {
    if validity_days == 0 && validity_hours == 0 {
      // throw error
      panic!("Validity should be greater than 0");
    }

    // sample date 2021-02-09T04:29:17.463120700TUTC
    let date = Utc::now()
      + Duration::days(validity_days.try_into().unwrap())
      + Duration::hours(validity_hours.try_into().unwrap());

    let token_expires = format!("{:?}", date);

    let token_string = format!(
      "so={org}&sn={namespace}&ss={service}&sp={permission}&se={token_expires}&sk={key_name}",
      namespace = namespace,
      org = org,
      service = service,
      permission = permission,
      token_expires = token_expires,
      key_name = key_name
    );
    let mut hmac = HmacSha256::new_varkey(tenant_key.as_bytes()).unwrap();
    hmac.update(token_string.as_bytes());
    let result = hmac.finalize();
    return format!(
      "{token_string}&sig={signature}",
      signature = encode(&base64::encode(&result.into_bytes())),
      token_string = token_string
    );
  }
}
