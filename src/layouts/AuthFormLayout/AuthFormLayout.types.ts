export interface AuthFormLayoutProps {
    title: string;
    subtitle: string;
    error: string | null;
    footerText: string;
    footerLinkText: string;
    footerLinkTo: string;
    children: React.ReactNode;
}
