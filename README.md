# Aegis Mailer node
Send emails or something I guess..

## Environment variables
* `PORT`: the port to listen on
* `SERVICE`: the nodemailer service to use (eg "gmail")
* `AUTH`: the auth object for nodemailer (eg '{"user":"youremail@gmail.com","pass":"yourpassword"}')

## Query format
POST to `your-host:port/` with
```yaml
{
  "to": "someone.else@example.com",
  "subject": "Whoa check this out!",
  "body": "Look! I'm sending an email!"
}
```
