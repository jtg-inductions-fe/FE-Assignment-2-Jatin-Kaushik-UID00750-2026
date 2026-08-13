import { PageHeader } from '@components/PageHeader';
import { OrderCardsList } from '@containers/OrderCardsList';

export const OrdersPage = () => (
    <div>
        <PageHeader title="Orders" />
        <OrderCardsList />
    </div>
);
