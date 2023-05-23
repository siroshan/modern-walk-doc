import { HTMLAttributes } from 'react';
import { cn } from '../../../../../lib/utils';

const AlertDialogFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'bg-background-elephant-contrast flex flex-col-reverse p-6 rounded-b-2xl sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
);
AlertDialogFooter.displayName = 'AlertDialogFooter';

export default AlertDialogFooter;
