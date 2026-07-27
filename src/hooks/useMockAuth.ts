const MOCK_STATE = {
    isAuthenticated: true,
    currentUser: {
        role: 'owner', // role can be "customer" or "owner"
    },
    isLoading: false, // Simulates loading authentication state
};

export const useMockAuth = () =>
    // When switching to Redux later, I will simply replace this entire return block with:
    // const { isAuthenticated, currentUser, isLoading } = useSelector((state: RootState) => state.auth);

    ({
        isAuthenticated: MOCK_STATE.isAuthenticated,
        currentUser: MOCK_STATE.currentUser,
        isLoading: MOCK_STATE.isLoading,
    });
