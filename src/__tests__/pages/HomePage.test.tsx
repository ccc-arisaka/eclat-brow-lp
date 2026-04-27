import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';

describe('Homepage', () => {
  it('renders LP main offer and CTA', () => {
    render(<HomePage />);

    expect(
      screen.getAllByText(/まつげパーマ×黄金比眉毛の垢抜けセット/i).length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole('link', {
        name: /今すぐ初回9,700円で予約する/i,
      }).length
    ).toBeGreaterThan(0);
  });
});
