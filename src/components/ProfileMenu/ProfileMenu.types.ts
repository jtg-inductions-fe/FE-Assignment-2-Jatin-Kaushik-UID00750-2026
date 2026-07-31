export interface ProfileMenuProps {
    userDisplayName: string;
    userEmail: string;
    onLogoutClick: () => void | Promise<void>;
}
