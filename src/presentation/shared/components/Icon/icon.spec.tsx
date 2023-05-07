import { FiCheck } from "react-icons/fi";

import { IconComponent } from "./index";
import { render, screen } from "@testing-library/react";

describe('Icon Shared Component', () => {

    test('Should render icon', () => {
        render(<IconComponent Icon={FiCheck} size="16px" ></IconComponent>)

        const icon = screen.getByTestId('icon');

        expect(icon).toBeInTheDocument()
    });
});