import { PageHeader } from '@components/PageHeader';
import { CartContainer } from '@containers/CartContainer';

export const CartPage = () => (
    <>
        <PageHeader title={'Your Cart'}></PageHeader>
        <CartContainer />
    </>
);
