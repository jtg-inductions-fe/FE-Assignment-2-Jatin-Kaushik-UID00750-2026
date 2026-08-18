import { PageHeader } from '@components/PageHeader';
import { Cart } from '@containers/Cart';

export const CartPage = () => (
    <>
        <PageHeader title={'Your Cart'}></PageHeader>
        <Cart />
    </>
);
