package io.swagger.client;


import java.net.URI;
import java.net.URLEncoder;
import org.apache.commons.lang3.StringUtils;
import java.nio.charset.StandardCharsets;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Base64;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public class CreateSASToken {
    public static String createSasToken(String secretKey,
                                         String organization,
                                         String namespace,
                                         String service,
                                         String permission,
                                         String keyName,
                                         int validityDays,
                                         int validityHours){
        if (validityDays == 0 && validityHours == 0)
            throw new IllegalArgumentException("Both validityDays and validityHours can't be 0");

        String tokenExpires = ZonedDateTime.now(ZoneId.of("UTC")).plusDays(validityDays).plusHours(validityHours)
                .format(DateTimeFormatter.ISO_INSTANT);
        tokenExpires = tokenExpires.replace(" ", "T");
        String tokenStr = StringUtils.join("so=", organization, "&sn=", namespace, "&ss=", service, "&sp=", permission, "&se=", tokenExpires, "&sk=", keyName);
        String base64HmacSha256 = null;
        String token;
        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
            mac.init(secretKeySpec);
            byte[] hmacSha256 = mac.doFinal(tokenStr.getBytes(StandardCharsets.UTF_8));
            base64HmacSha256 = Base64.getEncoder().encodeToString(hmacSha256);
            token = "SharedAccessSignature " + tokenStr + "&sig=" + URLEncoder.encode(base64HmacSha256, StandardCharsets.UTF_8.toString());

        } catch (Exception e) {
            throw new RuntimeException("Failed to calculate hmac-sha256", e);
        }
        return token;
    }

    public static void main(String[] args){
        String sasToken = createSasToken("xxxxxxx", "123", "456", "datasink", "read", "orc", 1, 1);
        System.out.println(sasToken);
    }

}
