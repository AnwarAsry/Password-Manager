import LayoutStyles from '@styles/Layout.module.scss'

export async function generateMetadata() {
    return {
        title: `About | PassMan`,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
        },
    };
}

const About = async () => {
    return (
        <section className={LayoutStyles.AboutSection}>
            <h2>About PassMan</h2>
            <p>
                PassMan is a secure, user-friendly password manager developed as part of a school examination project. The goal of this project was to create a modern web application that helps users manage their online credentials safely and efficiently.
                <br />
                <br />
                With PassMan, users can store, update, and delete passwords, as well as generate strong, encrypted passwords for their accounts. All sensitive information is securely stored using encryption techniques and linked to individual user accounts through a protected authentication system.
                <br />
                <br />
                This project demonstrates key skills in full-stack development, including:
            </p>
            <ul>
                <li>Next.js (App Router)</li>
                <li>Prisma (PostgreSQL)</li>
                <li>NextAuth.js for authentication</li>
                <li>Secure encryption and decryption logic</li>
                <li>RESTful API routes</li>
                <li>Client-server data handling and protected routes</li>
            </ul>
        </section>
    )
}

export default About;