import { PageHeader } from '@components/PageHeader';
import { OrdersList } from '@containers/OrdersList';

export const OrdersPage = () => (
    <div>
        <PageHeader title="Orders" />
        <OrdersList />
    </div>
);
