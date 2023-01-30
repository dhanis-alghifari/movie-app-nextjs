import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../components/atom/Input';

describe("Input", () => {
    it("should call the onChange prop when input value is changed", () => {
      const onchange = jest.fn();
      let changeCount = 0;
  
      const { getByPlaceholderText } = render(
        <Input onchange={() => {
          onchange();
          changeCount++;
        }} />
      );
      const input = getByPlaceholderText("Search...");
      fireEvent.change(input, { target: { value: "test" } });
  
      expect(onchange).toHaveBeenCalled();
      expect(changeCount).toBe(1);
    });
  });