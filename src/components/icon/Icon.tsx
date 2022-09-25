import styled from '@emotion/styled';

export interface IconProps {
    name: string;
    size: number;
    hover?: boolean;
}

const Icon = styled.span<IconProps>`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    background-image: url('assets/icons/${(props) => props.name}.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    display: inline-block;
    transition: all 0.2s ease-in-out;
    :hover {
        background-image: url('assets/icons/${(props) =>
            props.hover ? props.name + '-hover' : props.name}.svg');
    }
`;

export default Icon;
