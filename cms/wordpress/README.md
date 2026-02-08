# WordPress Headless Integration (Scaffold)

This project is prepared for a headless WordPress setup. Use WPGraphQL for a clean API and predictable content modeling.

## 1) Install Plugins in WordPress
- WPGraphQL
- Advanced Custom Fields (ACF)
- WPGraphQL for ACF

## 2) Configure Content Models
Create these custom post types and fields:

### Global Settings (Options Page)
- institute_name (text)
- institute_subline (text)
- affiliation_text (text)
- phone_primary (text)
- phone_secondary (text)
- address_text (text)
- admissions_ticker (text)
- hero_headline (text)
- hero_subheadline (textarea)
- cta_primary_label (text)
- cta_primary_url (url)
- cta_secondary_label (text)
- cta_secondary_url (url)

### Programs (CPT)
- program_code (text)
- program_title (text)
- program_highlight (text)
- program_image (image)

### Features (CPT)
- feature_title (text)
- feature_body (textarea)
- feature_icon (image)

### Partners (CPT)
- partner_name (text)
- partner_logo (image)

### Testimonials (CPT)
- student_name (text)
- student_program (text)
- quote (textarea)
- photo (image)

## 3) Environment Variables
Copy `.env.example` to `.env.local` and set the URL to your WordPress GraphQL endpoint.

## 4) Frontend Wiring
Use the helper in `lib/wordpress.ts` to query WPGraphQL. Replace hardcoded arrays in `app/page.tsx` with real data.

## Notes
- Keep media sizes consistent (1600x900 for hero assets, 800x600 for cards).
- Use HTTPS for the WP endpoint in production.
