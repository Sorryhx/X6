import { Text } from '../../../element/shape/text'
import { SVGAnimator } from '../svg'

@SVGTextAnimator.register('Text')
export class SVGTextAnimator extends SVGAnimator<SVGTextElement, Text> {
  leading(value: number | string) {
    return this.queueNumber('leading', value)
  }
}
