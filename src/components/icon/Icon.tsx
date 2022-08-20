import styled from '@emotion/styled';

export interface IconProps {
    name: string;
    size: number;
}

const Icon = styled.span<IconProps>`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    background-image: url('assets/images/${(props) => props.name}.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    display: inline-block;
`;

export default Icon;
