# BigFun — GitHub Pages website

Complete static website. No npm, build tool, API key or paid hosting required. Your ten supplied images are included as optimised WebP assets. Keep the assets folder and all paths intact. Open index.html for a local visual preview; submit form tests from your hosted HTTPS site.

## Test on GitHub Pages
1. Create a GitHub repository and upload the CONTENTS of this folder to its root (index.html must be in the root, not in a second BigFun folder).
2. In Settings → Pages, choose Deploy from a branch, select main and /(root), then Save.
3. Open the Pages URL GitHub gives you. Relative asset and thank-you links work under a repository subpath.
4. Do not move launch/CNAME into the root during testing. The launch folder contains optional production configuration.

## IMPORTANT: activate email delivery before accepting real enquiries
The form sends a native HTTPS POST through FormSubmit to kaya.boet1es@gmail.com. This works with GitHub Pages, which cannot send email itself. Native submission keeps FormSubmit's CAPTCHA verification and automatic customer response enabled.
1. Submit one clearly labelled TEST enquiry from the published Pages URL. Complete the provider's verification.
2. Open the activation email sent to kaya.boet1es@gmail.com and click its confirmation link. Check spam if needed. An activation step is required by FormSubmit; this ZIP cannot complete inbox verification.
3. Submit a NEW test enquiry after activation. Check that the formatted table email arrives, all selected details are present and Reply replies to the enquirer.
4. Test both Event hire and Permanent placement. Check the website, requirements and proposed venue percentage arrive. Test the customer confirmation using an email account you own. FormSubmit controls delivery and filtering; if no email arrives, do not launch until resolved.
5. FormSubmit provides a private endpoint token after activation if you want to hide the destination email in the form action. Replace the form action with that endpoint, leaving the contact links unchanged unless you also want a different public email.

Email subjects contain service, occasion/venue type, date and customer name. Table emails include all enabled named fields. Permanent placement fields replace event fields so irrelevant details are not emailed. Customer auto-response explains that an enquiry is not a confirmed booking. Visitors can review and download their own plain-text enquiry copy before sending. No customer details are saved to browser storage. The website has no internal inbox, availability calendar, payments or guaranteed booking confirmation; BigFun handles follow-up manually.

## Launch at BigFun.co.nz
You must own/control bigfun.co.nz. This package does not register a domain or connect your GitHub account.
1. Verify your domain in GitHub account Settings → Pages, using the TXT record GitHub supplies. Keep that record.
2. In repository Settings → Pages → Custom domain, enter bigfun.co.nz and Save. For branch publishing GitHub creates the root CNAME. Alternatively copy launch/CNAME to the website root at this stage.
3. At your domain registrar, add these A records for the apex (@):
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
4. Add www as a CNAME to YOUR-GITHUB-USERNAME.github.io (not the repo path). Replace YOUR-GITHUB-USERNAME with your actual username.
5. Once GitHub's DNS check and certificate are ready, enable Enforce HTTPS. DNS changes can take up to 24 hours.
6. Copy launch/robots.txt and launch/sitemap.xml to the root. Add <link rel="canonical" href="https://bigfun.co.nz/"> inside index.html's head. The Open Graph tags already target the production domain.
7. Test navigation, mobile layout, both enquiry types, CAPTCHA, inbox delivery, customer response, download, privacy dialog and gallery on the final domain. Submit sitemap.xml in Google Search Console if desired.

The testing robots.txt discourages indexing; it is not access control. Do not upload secrets or personal data to a public repository.

## Owner checks before launch
- Confirm that supplied images, brochure contents and photo permissions are appropriate for publication. The brochure image can contain older contact details or service promises; replace it if these are no longer accurate.
- This site intentionally avoids invented prices, testimonials, service locations and guarantees. Update actual coverage, pricing and confirmed features if wanted.
- Confirm whether the pictured blue/white model is the standing option you offer. Replace card images/descriptions if needed.
- Review the privacy notice against your actual business practices, maintenance arrangements and FormSubmit's policies.
- The percentage field means the proposed VENUE share of revenue. It is a proposal only, not an agreed contract.
- Editing destination email: change form action, contact links, privacy copy, thank-you page and app.js's downloadable signature. Activate the new inbox again.
- Website requests with sensitive information should be handled separately. FormSubmit is a third-party processor; no custom database or server is bundled.

## Files
index.html — full website and form
style.css — responsive retro styling
app.js — navigation, form switching, validation, gallery, enquiry download, email subjects
thank-you.html — post-submission page
404.html — missing-page fallback
assets/ — all ten supplied images and favicon
launch/ — production CNAME, robots and sitemap, kept separate for safe testing
.nojekyll — disables Jekyll processing

## Documentation
https://formsubmit.co/documentation
https://formsubmit.co/help
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
