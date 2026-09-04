# DNS records for heatenergycapital.kz

## DMARC

- Host: `_dmarc`
- Type: `TXT`
- Value: `v=DMARC1; p=quarantine; rua=mailto:info@heatenergycapital.kz; adkim=r; aspf=r; pct=100`

The policy uses relaxed alignment for compatibility with PS.kz mail while asking receiving systems to quarantine messages that fail both SPF and DKIM alignment. Aggregate reports are delivered to the corporate mailbox in Kazakhstan.
