import { onboardStaffSchema } from './validationSchema/staff';
import validatePayload from './validationSchema/validation';

export default validatePayload(onboardStaffSchema);
