import React from 'react'

type IProps = {
    draw(ctx: CanvasRenderingContext2D): any
    onClick(event: any): any
}

const Canvas: React.FC<IProps> = props => {
    const {draw, ...rest} = props

    const canvasRef = useCanvas(draw)

    return (<canvas  {...rest} ref={canvasRef} style={{position: 'absolute', height: '100vh', top: 0, left: 0}} />)
}


const useCanvas = (draw: (ctx: CanvasRenderingContext2D)=>any) => {

    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    React.useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas?.getContext('2d') as CanvasRenderingContext2D
        let animationFrameId: number

        const render = () => {

            if(canvas) {
                canvas.width = window.innerWidth - 20
                canvas.height = window.innerHeight
            }

            draw(context)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return canvasRef
}


export default Canvas

