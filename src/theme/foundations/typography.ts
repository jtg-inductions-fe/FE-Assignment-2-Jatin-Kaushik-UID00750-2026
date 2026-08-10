import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constant';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

/**
 * Creates a typography block with various styles
 * @param theme - Theme object to access the breakpoints.
 * @returns The function returns a TypographyOptions object, which includes various typography settings,
 */
const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: 'Inter',
    htmlFontSize: HTML_FONT_SIZE,

    h1: {
        fontSize: typographyUtil.pxToRem(30),

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(48),
        },
    },
    h2: {
        fontSize: typographyUtil.pxToRem(24),

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(36),
        },
    },
    h3: {
        fontSize: typographyUtil.pxToRem(20),

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(28),
        },
    },
    h4: {
        fontSize: typographyUtil.pxToRem(18),

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(22),
        },
    },
    body1: {
        fontSize: typographyUtil.pxToRem(16),

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(18),
        },
    },
    body2: {
        fontSize: typographyUtil.pxToRem(14),

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(16),
        },
    },
    button: {
        fontSize: typographyUtil.pxToRem(14),
        textTransform: 'none',

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(16),
        },
    },
});

export const typography = { typographyStyle, typographyUtil };
