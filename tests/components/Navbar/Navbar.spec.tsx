import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../../../src/components/Navbar/Navbar';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import * as hooks from '../../../src/common/hooks/useStoreState';
import * as actionHooks from '../../../src/common/hooks/useActions';
import React from 'react';

vi.mock('../../../src/common/hooks/useStoreState', () => ({
  useUserState: vi.fn()
}));

vi.mock('@/common/hooks/useActions', () => ({
  useActions: vi.fn()
}));

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ pathname: '/jogs' })
  };
});

describe('Navbar', () => {
  const mockLogout = vi.fn();
  const mockSetDateTo = vi.fn();
  const mockSetDateFrom = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(hooks.useUserState).mockReturnValue({
      token: 'mock-token',
      user: null,
      isLoading: false
    });

    vi.mocked(actionHooks.useActions).mockReturnValue({
      logout: mockLogout,
      setDateTo: mockSetDateTo,
      setDateFrom: mockSetDateFrom
    });
  });

  const renderNavbar = () => {
    const store = configureStore({
      reducer: {
        user: (state = {}) => state
      }
    });
    return render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
  };

  describe('Unauthorized state', () => {
    beforeEach(() => {
      vi.mocked(hooks.useUserState).mockReturnValue({
        token: null,
        user: null,
        isLoading: false
      });
    });

    it('should display login and signup buttons for unauthorized user', () => {
      renderNavbar();

      expect(screen.getByText('LOGIN')).toBeDefined();
      expect(screen.getByText('SIGNUP')).toBeDefined();
      expect(screen.queryByText('JOGS')).toBeDefined();
    });

    it('should redirect to home page without token', () => {
      renderNavbar();
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
