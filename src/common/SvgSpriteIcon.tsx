interface SvgSpriteIconProps {
    module: {
        id: string;
        url?: string;
        viewBox: string;
    };
}

export default class SvgSpriteIcon extends React.Component<SvgSpriteIconProps, {}> {

    render() {
        return (
            <svg viewBox={this.props.module.viewBox}>
                <use xlinkHref={'#' + this.props.module.id} />
            </svg>
        )
    }
}
