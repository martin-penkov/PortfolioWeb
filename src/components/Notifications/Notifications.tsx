import { Notification } from './Notification';
import { dismissNotification } from "@/app/features/notifications/notificationSlice";
import { useAppSelector, useAppDispatch } from "@/app/hooks";

export const Notifications = () => {
	const notifications = useAppSelector((state) => state.notificationsState.notifications);
	const dispatch = useAppDispatch()

	return (
		<div
			aria-live="assertive"
			className="z-50 flex flex-col fixed inset-0 space-y-4 items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
		>
			{notifications.map((notification) => (
				<Notification
					key={notification.id}
					notification={notification}
					onDismiss={(id: string) => dispatch(dismissNotification({id}))}
				/>
			))}
		</div>
	);
};