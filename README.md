# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Supabase. Features an admin panel for easy content management.

## Features

- **Public Portfolio Pages**: Home, About, Education, Projects, Experience, Certificates, Contact
- **Admin Panel**: Secure admin interface for managing all portfolio content
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Database Integration**: Supabase backend for data storage
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## Setup Instructions

### 1. Database Setup

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Open the SQL Editor
3. Copy and paste the contents of `database-schema.sql` into the editor
4. Run the SQL to create the necessary tables

### 2. Environment Variables

The `.env.local` file is already configured with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://aubqsnzwrmzrasgnazmt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
ADMIN_EMAIL=ahsanursabbir@gmail.com
ADMIN_PASSWORD=Ahs@nursabbir0
```

### 3. Install Dependencies

```bash
cd portfolio-website-fixed
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Admin Panel

Access the admin panel at `/admin/login` with the following credentials:
- **Email**: ahsanursabbir@gmail.com
- **Password**: Ahs@nursabbir0

### Admin Features

- **About Management**: Update personal information, description, and social links
- **Education Management**: Add/edit educational background
- **Projects Management**: Manage portfolio projects with GitHub and live demo links
- **Experience Management**: Add professional experience
- **Certificates Management**: Manage certifications and achievements

## Database Schema

The application uses the following tables:

- **about**: Personal information and social links
- **education**: Educational background
- **projects**: Portfolio projects
- **experience**: Professional experience
- **certificates**: Certifications and achievements

## Project Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── login/page.tsx      # Admin login page
│   │   └── page.tsx            # Admin dashboard
│   └── page.tsx                # Public portfolio homepage
├── lib/
│   ├── auth.ts                 # Authentication utilities
│   └── supabase.ts             # Supabase client and types
└── components/                 # Reusable components
```

## Customization

### Adding New Sections

1. Create a new table in Supabase
2. Add the table to the admin panel navigation
3. Create the public display section
4. Update the Supabase types

### Styling

The application uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `globals.css`
- Component-specific styles in individual files

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Security Notes

- Admin credentials are stored in environment variables
- Supabase handles authentication and authorization
- All database operations are secured with RLS (Row Level Security)

## Support

For issues or questions:
- Check the Supabase documentation
- Review Next.js documentation
- Open an issue in the repository

## License

This project is open source and available under the MIT License.