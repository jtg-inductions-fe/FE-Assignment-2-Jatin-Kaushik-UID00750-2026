const MOCK_STATE = {
    isAuthenticated: false,
    currentUser: {
        role: 'owner', // role can be "customer" or "owner"
    },
    status: 'succeeded', // Simulates authentication status:  type AsyncStatus = "idle" | "loading" | "succeeded" | "failed";
    error: null,
};

export const useMockAuth = () =>
    // When switching to Redux later, I will simply replace this entire return block with:
    // const { isAuthenticated, currentUser, isLoading } = useSelector((state: RootState) => state.auth);

    ({
        isAuthenticated: MOCK_STATE.isAuthenticated,
        currentUser: MOCK_STATE.currentUser,
        status: MOCK_STATE.status,
        error: MOCK_STATE.error,
    });
