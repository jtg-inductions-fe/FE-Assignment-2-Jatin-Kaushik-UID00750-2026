import { ROUTES } from '@constant';

type RouteParams = Record<string, string | number>;

/**
 * Injects parameters into a route string and strips unreplaced placeholders.
 * @param route - Route template path (e.g., '/restaurants/:id').
 * @param params - Keys matching placeholders to replace.
 * @returns Compiled path string.
 */

export const compileRoute = (route: string, params: RouteParams): string => {
    const filledRoute = Object.entries(params).reduce(
        (acc, [key, value]) => acc.replace(`:${key}`, String(value)),
        route,
    );

    return filledRoute;
};

export const routeBuilders = {
    /** Generates restaurant details path. */
    restaurantDetails: (restaurantId: string) =>
        compileRoute(ROUTES.RESTAURANT_DETAILS, { restaurantId }),

    /** Generates restaurant editing path. */
    restaurantEdit: (restaurantId: string) =>
        compileRoute(ROUTES.RESTAURANT_EDIT, { restaurantId }),
} as const;
