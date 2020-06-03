import { render } from '@testing-library/react';

export const mount = (component) => {
    const { container } = render(component);

    const find = (selector) => {
        const element = container.querySelectorAll(selector);
        const _find = sel => { return element[0].querySelectorAll(sel) }
        const text = () => { return element[0].textContent };
        const src = () => { return element[0].src };

        return { ...element, find: _find,text,  };
    }


    return { find }
}
