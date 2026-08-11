/**
 * Properties of a row containing a form field label and input
 */

export interface FormFieldRowProps {
    /** Label content displayed adjacent to the field */
    label?: string;
    /** Target identifier mapping the label to its corresponding input node */
    htmlFor?: string;
    /** Form inputs or selection fields placed inside the container block */
    children: React.ReactNode;
}
