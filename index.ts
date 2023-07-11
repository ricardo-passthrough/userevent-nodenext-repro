import userEvent from '@testing-library/user-event';

// @ts-expect-error
const user: ReturnType<typeof userEvent.default.setup> = userEvent.setup();
