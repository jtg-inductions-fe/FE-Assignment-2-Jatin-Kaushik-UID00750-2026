export interface AuthFormLayoutProps {
    title: string;
    subtitle: string;
    error: string | null;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    footerText: string;
    footerLinkText: string;
    footerLinkTo: string;
    children: React.ReactNode;
}
