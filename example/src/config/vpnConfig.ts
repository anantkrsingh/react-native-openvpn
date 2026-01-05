// VPN Configuration
export const USA_VPN_CONFIG = `client
dev tun
proto udp
remote 34.182.124.213 1194
resolv-retry infinite
nobind
persist-key
persist-tun
auth-user-pass
cipher AES-256-CBC
verb 3

<ca>
-----BEGIN CERTIFICATE-----
MIIDNjCCAh6gAwIBAgIUD1nUoHTPPWJqA24mOkSzbh0H/w0wDQYJKoZIhvcNAQEL
BQAwDzENMAsGA1UEAwwEdGVzdDAeFw0yNTEyMzAwOTI1MDFaFw0zNTEyMjgwOTI1
MDFaMA8xDTALBgNVBAMMBHRlc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK
AoIBAQDJ18b5oCLZYxFZZzC38smBwO7I9CZu2CGMcPYzTGlo640OnBIf6QmPLWUy
QGbe41u3IIeDVNADSgWXeia4kaNkU+lqEEWFu9Bec4Be520JbaQvHmz7nHmK8lmP
7eWJ+NYOJGUQ8z4875XbKupLRyeEQH0uUEhKpwtrTuMZkD1Idl1+uSnXD9IETJh8
t3+T88BTPr/iF+oY+G8hTBxoYMwgtE62YAqVPz0qnlidrhkmrk7hF8DNm1Rj7EDd
qFl9pI0Q8gIctxxBUHrVVwsay3ER/h6FOC+OqoIpkvvL58HRiZwngCeDQFhmqqiD
/T03sysfnWbq3XV5S/fDd0v0PVqXAgMBAAGjgYkwgYYwHQYDVR0OBBYEFPMic4jz
NL9Cjlq4RjHg+87JgJ0hMEoGA1UdIwRDMEGAFPMic4jzNL9Cjlq4RjHg+87JgJ0h
oROkETAPMQ0wCwYDVQQDDAR0ZXN0ghQPWdSgdM89YmoDbiY6RLNuHQf/DTAMBgNV
HRMEBTADAQH/MAsGA1UdDwQEAwIBBjANBgkqhkiG9w0BAQsFAAOCAQEAVkh/RSmR
eSE6bUP/kHM4nZ5D/1QHAb+Dd4CZM9mvCffjTdoDiGxn4e52+ovhrqaJjOVqXWcS
NPzxuHubXnllFxToWt99AZbLg5QBbns6E5fXhW7hIyVAt1294wTPawyP6ozgrM0Q
Y6t+sS0PPOuX6p+wn+Z4awtELd37sRZxqpRcDkk3fNVOhqm9ckg0WBenxIgWA87m
bC7CkHV+OZ9U5Wrmv1nkB3SGlsdkVaO/K3e5DfvFKA+Hbx5kw7Pv3yNazGYNQqnq
Q0lpLovr1mwtnzI9lQPwjwP09Vx6CdQy8etxs89qIJm/lCCL6yk3j3CX2jBNVu7K
IUQ0l0YXIXfRPg==
-----END CERTIFICATE-----

</ca>

<cert>
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            9a:19:d2:c2:f5:91:25:0f:53:f8:4f:14:e3:85:55
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: CN=test
        Validity
            Not Before: Dec 30 09:54:42 2025 GMT
            Not After : Apr  3 09:54:42 2028 GMT
        Subject: CN=anant
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (2048 bit)
                Modulus:
                    00:b4:0f:7b:0b:97:8f:38:bc:ab:a6:17:46:f5:99:
                    ab:20:08:3e:54:14:e5:d0:ac:56:65:b0:7d:35:88:
                    6b:57:c4:a7:52:b5:07:91:93:6b:85:79:a2:a9:58:
                    9f:23:6e:7f:af:e8:0b:f2:21:86:a7:de:5b:25:b0:
                    67:25:f7:37:79:c6:f4:c1:8c:3e:80:73:43:cf:ec:
                    6f:c9:dc:fb:9c:8d:7c:1d:97:fd:b9:ea:bf:91:17:
                    09:09:ef:17:77:21:8e:ca:52:8e:14:f7:30:80:7a:
                    35:29:17:ff:ac:8b:42:30:53:a0:ca:b6:59:54:31:
                    d2:04:83:b2:03:6b:1a:34:77:08:95:d8:55:5c:7c:
                    c5:b7:50:42:af:16:c5:25:83:cb:5d:45:88:36:b3:
                    f2:d3:e1:70:cf:96:09:de:61:f1:05:be:5e:2b:98:
                    eb:f0:ca:dd:67:fc:dd:37:87:b0:a1:42:9b:ac:c2:
                    35:df:99:4f:c3:16:eb:19:22:d1:c0:a2:e1:49:5d:
                    68:c7:86:71:0f:aa:93:ed:78:bc:47:46:03:92:bc:
                    58:25:4c:56:59:ab:6b:72:04:ce:cc:b6:51:cd:2d:
                    d6:9a:41:80:e8:6f:03:c6:29:62:e4:21:26:3b:17:
                    be:71:83:1e:64:37:fd:24:5a:10:86:84:fc:ac:21:
                    c9:27
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Basic Constraints: 
                CA:FALSE
            X509v3 Subject Key Identifier: 
                98:DF:5F:42:C7:79:55:FA:27:AB:B7:60:50:7D:4E:9C:0F:3A:3F:04
            X509v3 Authority Key Identifier: 
                keyid:F3:22:73:88:F3:34:BF:42:8E:5A:B8:46:31:E0:FB:CE:C9:80:9D:21
                DirName:/CN=test
                serial:0F:59:D4:A0:74:CF:3D:62:6A:03:6E:26:3A:44:B3:6E:1D:07:FF:0D
            X509v3 Extended Key Usage: 
                TLS Web Client Authentication
            X509v3 Key Usage: 
                Digital Signature
    Signature Algorithm: sha256WithRSAEncryption
    Signature Value:
        13:0e:5f:de:52:6c:9d:51:58:0b:2d:d6:12:85:46:cb:d9:7b:
        11:2b:02:c2:e4:ad:a8:55:bb:b4:1e:61:80:4c:87:03:ca:aa:
        21:3e:2d:1b:b2:1d:5a:62:19:45:96:37:14:c7:8e:9f:65:0b:
        b4:bd:cd:ed:3d:97:8f:45:fe:68:4f:f1:4a:4e:44:46:05:23:
        d2:5a:a6:06:79:e1:30:3f:db:75:ff:5c:78:96:90:23:c3:c1:
        48:8d:c2:22:d3:d3:eb:ca:7f:ab:08:8c:cd:2a:5b:09:bb:83:
        5a:15:46:29:6f:75:ce:18:bd:48:f8:dc:f9:7b:79:37:9b:23:
        ce:5c:d9:1d:e4:3b:77:14:d8:5d:5f:7b:14:3e:bd:af:f4:f6:
        a4:7d:04:29:13:d5:6b:59:4d:63:55:89:e5:57:93:33:d6:90:
        0e:87:c8:8b:dd:f8:92:c9:47:c0:2f:de:c5:44:a1:02:b0:d3:
        71:58:1f:9b:a0:a4:ba:9d:4e:54:ac:d9:05:b7:22:9f:ae:56:
        e5:66:e2:a9:6e:0d:f0:fe:db:2f:03:53:b7:90:67:12:e1:56:
        88:f8:fe:b2:12:ef:2f:a1:4e:6c:2f:e5:19:9a:44:94:ad:62:
        f6:1d:e7:c1:66:8b:b7:99:cb:bd:ab:4e:31:6d:eb:43:51:00:
        9b:a7:af:cc
-----BEGIN CERTIFICATE-----
MIIDRTCCAi2gAwIBAgIQAJoZ0sL1kSUPU/hPFOOFVTANBgkqhkiG9w0BAQsFADAP
MQ0wCwYDVQQDDAR0ZXN0MB4XDTI1MTIzMDA5NTQ0MloXDTI4MDQwMzA5NTQ0Mlow
EDEOMAwGA1UEAwwFYW5hbnQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
AQC0D3sLl484vKumF0b1masgCD5UFOXQrFZlsH01iGtXxKdStQeRk2uFeaKpWJ8j
bn+v6AvyIYan3lslsGcl9zd5xvTBjD6Ac0PP7G/J3PucjXwdl/256r+RFwkJ7xd3
IY7KUo4U9zCAejUpF/+si0IwU6DKtllUMdIEg7IDaxo0dwiV2FVcfMW3UEKvFsUl
g8tdRYg2s/LT4XDPlgneYfEFvl4rmOvwyt1n/N03h7ChQpuswjXfmU/DFusZItHA
ouFJXWjHhnEPqpPteLxHRgOSvFglTFZZq2tyBM7MtlHNLdaaQYDobwPGKWLkISY7
F75xgx5kN/0kWhCGhPysIcknAgMBAAGjgZswgZgwCQYDVR0TBAIwADAdBgNVHQ4E
FgQUmN9fQsd5Vfonq7dgUH1OnA86PwQwSgYDVR0jBEMwQYAU8yJziPM0v0KOWrhG
MeD7zsmAnSGhE6QRMA8xDTALBgNVBAMMBHRlc3SCFA9Z1KB0zz1iagNuJjpEs24d
B/8NMBMGA1UdJQQMMAoGCCsGAQUFBwMCMAsGA1UdDwQEAwIHgDANBgkqhkiG9w0B
AQsFAAOCAQEAEw5f3lJsnVFYCy3WEoVGy9l7ESsCwuStqFW7tB5hgEyHA8qqIT4t
G7IdWmIZRZY3FMeOn2ULtL3N7T2Xj0X+aE/xSk5ERgUj0lqmBnnhMD/bdf9ceJaQ
I8PBSI3CItPT68p/qwiMzSpbCbuDWhVGKW91zhi9SPjc+Xt5N5sjzlzZHeQ7dxTY
XV97FD69r/T2pH0EKRPVa1lNY1WJ5VeTM9aQDofIi934kslHwC/exUShArDTcVgf
m6Ckup1OVKzZBbcin65W5WbiqW4N8P7bLwNTt5BnEuFWiPj+shLvL6FObC/lGZpE
lK1i9h3nwWaLt5nLvatOMW3rQ1EAm6evzA==
-----END CERTIFICATE-----

</cert>

<key>
-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC0D3sLl484vKum
F0b1masgCD5UFOXQrFZlsH01iGtXxKdStQeRk2uFeaKpWJ8jbn+v6AvyIYan3lsl
sGcl9zd5xvTBjD6Ac0PP7G/J3PucjXwdl/256r+RFwkJ7xd3IY7KUo4U9zCAejUp
F/+si0IwU6DKtllUMdIEg7IDaxo0dwiV2FVcfMW3UEKvFsUlg8tdRYg2s/LT4XDP
lgneYfEFvl4rmOvwyt1n/N03h7ChQpuswjXfmU/DFusZItHAouFJXWjHhnEPqpPt
eLxHRgOSvFglTFZZq2tyBM7MtlHNLdaaQYDobwPGKWLkISY7F75xgx5kN/0kWhCG
hPysIcknAgMBAAECgf8qndx17YwbSl3hoEOrOpDGD7kN57XC0Ni5UACvn0ixcZ/L
isdiuNMLcuF1p74xJKSfrECb62q5UJX8Sf5OZsv0tS3buKdA7jWel+6Xnk00418U
LarreN5Ssv4fOOBJRlaRF/j9QycUtdf2eTehk1Q6BKhbUip1QvhPR8T9IWfvdu5n
N+6bcnwqe1DBqTIx2hvxaWset88UFkpueTrqGue/8CKrDDDwlb6nZ6SSO95hdHEo
hb41skv/TbunVFT/Oh00FnCz0drrh5YIqQMnFIbjjYVXsMj4i2snYtT5MLs5X+nJ
wQItxKqvZVxPnNf099LYQwz/dK8L+rL/mPadHFECgYEA4ZIkpC7kluRGluuwMmLK
IADhTTtZiNJBKoi+tLdQ4zErWYFnwWSyI4btzQbCJbO1qJNBQzuRxQHYcXv2Xm5Q
CiG+31vnFR0qEtYUS2G3O0s1ucHSyYl5UzI4Yy6qRXMaAy8IY3KZaaZ8xMXb//lI
wndcudR7aa6W7szoVEeRa7cCgYEAzFmu0Zo6RAw3dPvFQucC5mrmEGeq/ZdJcfwr
iOcK5uG4Lzwks4fbc4pjp6AaroyLM7nSaLrBOXfXVR0Bfgqh4Q0IUv9cealvMbMQ
IQb3pmro8cuhuaWDONO7lIqOWhvKRGxv8Jz+xuA5xZL0y+SANjC23sI3rfOiBTQ6
rsxXbhECgYEAjqflQmxhpsgRmIrP8N2nZNwJoNVjB3OpQOQgb5vrrPNArid33cf4
HR3NMLgQetWPkmAmiwWWZ9iF8SdrpUbwmafD1fCCUUkTfbwkM5RF1Fr5TFQ3Ibwu
nZ4KKTeu+aMUlWTeUj58pWNkTvGu89DM4ieo3eFyd2CyFa5DVGG6pzsCgYB9y9eq
gF7N9RdOlI7imINYhQYLo0XHxpIX8Tx7kn9LkjhoG4YcXs3hWpfuYMkMGsi2lvXI
Mu8wCW4tnyWECdeNSxCMx1aOLpec6LZNHpTlhXrRHqH4PsOBABbBYmovXlwtsvNW
E89jbjUiQ00fFxM2SNbKWpUcKJbczUIyyOgpgQKBgQDHKvtsWVF07EyWwMXpJYYS
83ZwneFikjxXiAsZH967joP2HOqRoRZ0qYz40yGojz7Vy7B2+nqn9r3Q8eUZqEpV
T4YBjE0vuMdeyDZG3Y9jHijjXms1ByND9Ws5WyRFeSOPGk42cW9EgrEkSkafYTzA
Jk0A1GlfLziKqzMU45ETcw==
-----END PRIVATE KEY-----
</key>`;

export const SINGAPORE_VPN_CONFIG = `
client
dev tun
proto udp
remote 34.87.96.207 1194
resolv-retry infinite
nobind
persist-key
persist-tun
auth-user-pass
cipher AES-256-CBC
verb 3

<ca>
-----BEGIN CERTIFICATE-----
MIIDSzCCAjOgAwIBAgIUL/hKDCrNXblYPiHG6x0d+fQ+OdQwDQYJKoZIhvcNAQEL
BQAwFjEUMBIGA1UEAwwLRWFzeS1SU0EgQ0EwHhcNMjYwMTA1MTcyMTI5WhcNMzYw
MTAzMTcyMTI5WjAWMRQwEgYDVQQDDAtFYXN5LVJTQSBDQTCCASIwDQYJKoZIhvcN
AQEBBQADggEPADCCAQoCggEBALUDAlRJ+SbGC53M9ZkndMvKr+3qXIkgW+J2oB03
UDBntksazPv415JwvX7FsrK88v86vCLp9zeFwS46UfuWusRE2xqX9/e1JVOOMGH5
pAEWNoMWxLQTclCXnoeJrOAjtPD5h2UrGHGEr8YZCGReB6pFU/SYks1pxCeajfC0
SDVkNH7fkH79LlmX/Tl5OdL5oYAfngwT+PFDvt+83TFYo64Ae7R+whoF3fR3tNzQ
v4DgIfwQpKRL0JugF5EOXSJsO1dArNuRNled6ThahHvPW8kdgVdKF6iaty21JBAd
5XK5B7YTf81H19onzZLypg97WMeb5WYpvkaJOko2XzFzSB8CAwEAAaOBkDCBjTAd
BgNVHQ4EFgQUQDsARivF5ot1dPUp+0hFMYcw7dAwUQYDVR0jBEowSIAUQDsARivF
5ot1dPUp+0hFMYcw7dChGqQYMBYxFDASBgNVBAMMC0Vhc3ktUlNBIENBghQv+EoM
Ks1duVg+IcbrHR359D451DAMBgNVHRMEBTADAQH/MAsGA1UdDwQEAwIBBjANBgkq
hkiG9w0BAQsFAAOCAQEAJoYtXMXQmUfh95aFRgIeAZKyOmk/SFMzddFvxWAByAM2
fEviqRdhM5alCnGtDQkv0gBYRuOiblp2SW/4OcDbV0ONbvJVPnmuYBnYualx+RVR
l+U944Nlxn2Rc2wM9HKj/hVMefv5W2QgdKsQnItyOxgNjNLgXbj4/pXqGiOXzNaU
QmpgRNntQUOpUXFu0CZU01TyKMkY4Dk5+iCzwTmx5tDwYsUYu+gh+smtidupkcLo
GtCUVePKA7HAzPK8LaH4a8T8GTMiNxUlFFF3LM5tNweAO4Ujb76nxaeILRBonNR4
pwTNxMmCPK+3emD0snmqhbuvA91NtYSJpFDzflzq0Q==
-----END CERTIFICATE-----

</ca>

<cert>
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            46:e2:1d:6c:2e:b1:04:0d:c1:20:ba:e1:e5:01:69:cc
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: CN=Easy-RSA CA
        Validity
            Not Before: Jan  5 17:27:00 2026 GMT
            Not After : Apr  9 17:27:00 2028 GMT
        Subject: CN=anant
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (2048 bit)
                Modulus:
                    00:bb:7d:63:b4:0e:92:0f:08:95:31:93:b5:35:b9:
                    6d:ff:02:bc:e7:0e:33:40:06:f0:a4:5a:b5:ee:44:
                    7a:04:47:68:50:ce:01:e2:c7:dd:2e:e1:20:9e:65:
                    e0:dc:9c:a5:ea:1f:51:d7:a4:cb:1e:71:0e:35:24:
                    94:40:38:17:2d:8a:bc:14:7b:a5:95:9b:43:73:0d:
                    5f:61:63:a7:54:f1:68:ae:40:9e:e2:90:22:d6:28:
                    5c:52:28:a0:bd:e3:df:d7:63:08:67:f5:6f:b8:0d:
                    15:9c:11:f5:f7:16:45:47:61:f3:81:5b:4e:bd:2b:
                    9c:0f:68:f2:ec:2a:64:8a:61:75:37:28:c2:de:da:
                    7f:9b:f1:e1:a1:b7:ca:c3:b2:10:f3:39:74:7b:88:
                    85:1a:b2:94:f7:f1:f6:10:ab:a9:28:ca:cf:8f:c1:
                    4e:a7:0b:ca:62:db:76:ac:17:b9:39:50:68:bf:8f:
                    26:8b:2b:06:b7:b9:73:d5:94:74:ed:27:8e:15:97:
                    29:a4:fa:a4:ae:a4:74:b0:55:ca:ab:76:21:a0:ad:
                    51:4e:f9:28:70:cd:d2:ef:f5:79:0c:d7:85:f7:7d:
                    4f:bc:ad:00:00:46:b5:35:ec:69:4d:17:95:d7:12:
                    fc:58:0b:1b:94:29:1a:6b:58:56:ec:82:83:3a:8e:
                    fb:7b
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Basic Constraints: 
                CA:FALSE
            X509v3 Subject Key Identifier: 
                94:34:D9:83:95:C0:A5:D9:3B:C5:AC:7B:4A:FE:B2:54:37:BF:5D:15
            X509v3 Authority Key Identifier: 
                keyid:40:3B:00:46:2B:C5:E6:8B:75:74:F5:29:FB:48:45:31:87:30:ED:D0
                DirName:/CN=Easy-RSA CA
                serial:2F:F8:4A:0C:2A:CD:5D:B9:58:3E:21:C6:EB:1D:1D:F9:F4:3E:39:D4
            X509v3 Extended Key Usage: 
                TLS Web Client Authentication
            X509v3 Key Usage: 
                Digital Signature
    Signature Algorithm: sha256WithRSAEncryption
    Signature Value:
        61:a6:87:b4:e5:11:bf:58:1d:0f:18:dd:fe:e3:30:60:d2:36:
        03:1a:d4:89:46:f4:78:06:ea:c5:56:3f:2a:95:94:0f:f9:d0:
        1c:5b:cd:59:24:68:1a:f4:17:83:a6:84:e2:ef:67:40:0c:cc:
        6c:c3:fd:3a:23:3a:ca:14:06:96:8f:36:2b:19:c8:0d:e7:49:
        8e:c4:88:e1:4f:22:1f:20:04:72:0c:7a:e7:3a:ba:af:f1:88:
        9e:e2:7c:78:05:3c:e4:db:34:2d:47:5b:7d:5a:6c:e3:09:b4:
        86:79:f5:64:29:ec:c1:18:dc:ca:a8:9b:b3:6b:0a:6d:84:8d:
        1e:f6:17:29:eb:fb:88:5b:9a:7d:87:bd:4a:43:90:37:41:82:
        5e:1a:df:89:e6:72:6b:1f:9f:49:9c:31:b2:19:01:24:ff:12:
        df:07:6a:d5:e2:d7:0d:d3:7a:04:47:37:65:00:c6:b6:31:7b:
        b2:75:28:5c:c4:2e:ba:1e:3e:b6:6c:5a:6c:ef:23:92:be:22:
        c3:70:be:ae:70:a0:67:60:48:ce:09:d3:2b:48:89:9d:6e:91:
        36:d6:9c:eb:47:93:fb:03:41:76:07:29:5e:d2:3c:95:19:4d:
        7f:91:42:fe:76:49:98:50:05:f9:8c:7a:5e:7e:51:6e:17:2c:
        81:94:b6:b8
-----BEGIN CERTIFICATE-----
MIIDUzCCAjugAwIBAgIQRuIdbC6xBA3BILrh5QFpzDANBgkqhkiG9w0BAQsFADAW
MRQwEgYDVQQDDAtFYXN5LVJTQSBDQTAeFw0yNjAxMDUxNzI3MDBaFw0yODA0MDkx
NzI3MDBaMBAxDjAMBgNVBAMMBWFuYW50MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A
MIIBCgKCAQEAu31jtA6SDwiVMZO1Nblt/wK85w4zQAbwpFq17kR6BEdoUM4B4sfd
LuEgnmXg3Jyl6h9R16TLHnEONSSUQDgXLYq8FHullZtDcw1fYWOnVPForkCe4pAi
1ihcUiigvePf12MIZ/VvuA0VnBH19xZFR2HzgVtOvSucD2jy7CpkimF1NyjC3tp/
m/HhobfKw7IQ8zl0e4iFGrKU9/H2EKupKMrPj8FOpwvKYtt2rBe5OVBov48miysG
t7lz1ZR07SeOFZcppPqkrqR0sFXKq3YhoK1RTvkocM3S7/V5DNeF931PvK0AAEa1
NexpTReV1xL8WAsblCkaa1hW7IKDOo77ewIDAQABo4GiMIGfMAkGA1UdEwQCMAAw
HQYDVR0OBBYEFJQ02YOVwKXZO8Wse0r+slQ3v10VMFEGA1UdIwRKMEiAFEA7AEYr
xeaLdXT1KftIRTGHMO3QoRqkGDAWMRQwEgYDVQQDDAtFYXN5LVJTQSBDQYIUL/hK
DCrNXblYPiHG6x0d+fQ+OdQwEwYDVR0lBAwwCgYIKwYBBQUHAwIwCwYDVR0PBAQD
AgeAMA0GCSqGSIb3DQEBCwUAA4IBAQBhpoe05RG/WB0PGN3+4zBg0jYDGtSJRvR4
BurFVj8qlZQP+dAcW81ZJGga9BeDpoTi72dADMxsw/06IzrKFAaWjzYrGcgN50mO
xIjhTyIfIARyDHrnOrqv8Yie4nx4BTzk2zQtR1t9WmzjCbSGefVkKezBGNzKqJuz
awpthI0e9hcp6/uIW5p9h71KQ5A3QYJeGt+J5nJrH59JnDGyGQEk/xLfB2rV4tcN
03oERzdlAMa2MXuydShcxC66Hj62bFps7yOSviLDcL6ucKBnYEjOCdMrSImdbpE2
1pzrR5P7A0F2Byle0jyVGU1/kUL+dkmYUAX5jHpeflFuFyyBlLa4
-----END CERTIFICATE-----

</cert>

<key>
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7fWO0DpIPCJUx
k7U1uW3/ArznDjNABvCkWrXuRHoER2hQzgHix90u4SCeZeDcnKXqH1HXpMsecQ41
JJRAOBctirwUe6WVm0NzDV9hY6dU8WiuQJ7ikCLWKFxSKKC949/XYwhn9W+4DRWc
EfX3FkVHYfOBW069K5wPaPLsKmSKYXU3KMLe2n+b8eGht8rDshDzOXR7iIUaspT3
8fYQq6koys+PwU6nC8pi23asF7k5UGi/jyaLKwa3uXPVlHTtJ44Vlymk+qSupHSw
VcqrdiGgrVFO+ShwzdLv9XkM14X3fU+8rQAARrU17GlNF5XXEvxYCxuUKRprWFbs
goM6jvt7AgMBAAECggEAHmJjj5ES7jkbsJVO9yjDYOHpNOASFyy+FUHsHPPfpaTg
N27YqGTFKBfs6NlQLSsnyj7kImM/AFfIZSgLQd21Mo4QDUO9NyHFNwvc6r6zJgAa
JlnWRez08FRJzeNuqrIXcGOeFPbrcYjmo8yCBNaI81i2P+meY5LXL494Ws9DTEIt
Fp5IrMCZ9MDZD3Lxym3/a0hIm3QyQ/B72fbOq8cCkpIfw+oS64UEaH/vAQy0rHXk
IZX33mMOficEaNkvn8GbrAVJ2ZskeTaijWzk38Ig5sm3Qz4rlJYUb17WigoHpoLY
N1qgM51mjZuHzZjZJQTvYQi4hKeIPwaTYKs6pLMF8QKBgQD5pRvtEZ9TMbtcfJSc
95gEUbF8mjYNGGjz6ohOxJM5oexNwdR3prVno8JEPjW5ofONZpMuvBlXbXbVjHmf
V1wf+LgMipJUSYgz9BLzpsdZBmfEIaq1DIgGn0+LcMcHttIQRxxd9gVC/b2Ty0ou
VVq3AZ5xaZ16PQUseCOw1EKD0QKBgQDAQzn8c204M3ZhA8MLR6x+hYm487rePKgM
PwnDIXzvYdyGxt7mYZOnnCbtiqhMD1ITiJgtIir+Cx/seg2Hoa4eLqcj6TNBkyIu
EdqqRC78lHjRjDlR+E0FR++ovZtdhuo2hioBtJGqtcKyDDB56bmL+U5TOT5MwdGj
vOMu4PIZiwKBgQCn6RXPbnrrShfrLSAIM8Bbp1bpqA+S30g4RxdHY5BiwzZdVnHB
yK9a9hpELFOWeAeIo+V7Gakx1L6JA+MJ+YhNOM0SImIprwudZh0ZJKQQjO5eTQa0
n6keSykFcOVtmtnPeQTrbf48AM7yCVnrsB1D2iLnxVHWVhSUxHm9Bgd3AQKBgEWW
D163yEgXGDl0yxtCDcSdQIOYc4IMIiaMilP9wuJBYTfGstZfarm3Yr+G9/LPeL1p
Kurq+vSHwj4szsjQU9zIteXheZO6VRyniaUmmHsCodf2EKkCXZ4Ts0I3ngvz0MF7
PajwWeiXcKhQkRsO5QEscpTcmxfc7qt8qh1FfVqRAoGAaCMln6t5LviwFD8R2WSZ
EYSgfVHHywz1cKIufV5ZxjEsZH1DSXyCfY6LesfjCdFVXZposRfxtsbzAxUDuqxs
qaCe7uV5tOlH53VLYFqwGIbpLhU4IVgowPay0NGIBfEgxPU+vAHykvXfbvgqql2H
uS2WoAZcKveKA3BiAl1ziKI=
-----END PRIVATE KEY-----

</key>
`

export const USA_VPN_CREDENTIALS = {
  address: '34.182.124.213',
  username: 'anant',
  password: 'anant',
};
export const SINGAPORE_VPN_CREDENTIALS = {
  address: '34.87.96.207',
  username: 'anant',
  password: 'anant',
};

export const VPN_NOTIFICATION_CONFIG = {
  openActivityPackageName: 'openvpn.example',
  titleNotification: 'OpenVPN',
  titleConnecting: 'Connecting...',
  titleConnected: 'Connected',
  titleDisconnecting: 'Disconnecting...',
  titleDisconnected: 'Disconnected',
  titleError: 'Connection Error',
  showDisconnectAction: true,
  titleDisconnectButton: 'Disconnect',
};

export const VPN_IOS_OPTIONS = {
  localizedDescription: 'OpenVPN Connection',
  networkExtensionBundleIdentifier: 'com.openvpn.OpenvpnExample.OpenVPNTunnel',
  disconnectOnSleep: false,
  onDemandEnabled: false,
};



