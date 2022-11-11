Section 1 - Creating Cookies

1. JavaScript: **document.cookie**
2. Web Server: **Set-cookie** header

---

Section 2 - Cookie Properties

- Sent with every request
- Cookie Scope
    - Domain
    - Path
- Expires, Max-age
- Same site

Sent with every request

- Cookies are sent with every api request. These are scoped on the basis of domain & path used while creating the cookie.
- Example: [example.com](http://example.com) cookie will only be sent for example.com and not for [www.example.com](http://www.example.com) until the cookie has been set with domain=.example.com. Similarly if path is set then the cookie will only be sent to the server if a request is made to that particular path.

Same Site

- Until & unless same site cookie property has been set to `strict` that cookie can be sent if someone clicks on a link to that website.

Cookie Scope

- Domain
    - document.cookie=’cookie=value; domain=domain’;
    - res.setHeader(’set-header’, [’cookie=value; domain=domain’]);
- Path
    - document.cookie=’cookie=value; path/path’;
    - res.setHeader(’set-header’, [’cookie=value; path=/path’]);

Expires, Max-age

- document.cookie=’cookie=value; max-age=10min’;
- res.setHeader(’set-cookie’, [’cookie=value; max-age=10min’]);

Same Site

- document.cookie=’cookie=value; samesite=strict’;
- res.setHeader(’set-cookie’, [’cookie=value; samesite=strict’]);

---

Section 3 - Cookie Types

1. Session Cookie
2. Permanent Cookie
3. Httponly Cookie
4. Secure Cookie
5. Third party Cookie
6. Zombie Cookie

Session Cookie

- A cookie without any max-age or expiry is known as a session cookie. It lives until the browser is open.

Permanent Cookie

- A cookie with max-age set or expiry. It will live even if the browser session is closed and only expires ones the max-age has reached or the cookie has expired.

Httponly Cookie

- It can only be set from the server.
- The browser cannot read them.
- Example
    - res.setHeader(’set-cookie’, [’cookie=value; httponly’]);
    

Secure Cookie

- Secure cookies like httponly cookie can only be set from the server.
- Secure cookies can only be sent to the domains with https enabled.

Third Party Cookie

- These are cookie that are set within your domain but for other domain by third party resources integrated to your website.

Zombie Cookie

- A cookie that re-creates itself ones deleted is known as a zombie cookie.
- This is done mostly via E-tag values. Some sites return the 304 for all the subsequent requests, so these sites track you with the help of the E-tag set. Since the E-tag is not going to change ever, therefore, you will be identified and the same cookie can be set again.

---

Section 4 - Cookie Security

- Stealing Cookies
- Cross site request forgery

Stealing Cookies

- Send cookie via reading `document.cookie` to your website.