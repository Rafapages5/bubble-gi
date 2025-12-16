import { Container } from '@/components/ui'

export default function ShippingPolicyPage() {
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-heading font-bold text-bubble-dark mb-8">Política de Envío</h1>

            <div className="prose prose-bubble max-w-none text-bubble-gray space-y-6">
                <section>
                    <h2 className="text-xl font-semibold text-bubble-dark mb-3">Procesamiento de Pedidos</h2>
                    <p>
                        Todos los pedidos se procesan dentro de 2 a 3 días hábiles (excluyendo fines de semana y días festivos)
                        después de recibir la confirmación de su pedido por correo electrónico. Recibirá otra notificación
                        cuando su pedido haya sido enviado.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-bubble-dark mb-3">Tarifas y Estimaciones de Envío Nacional</h2>
                    <p>
                        Los cargos de envío para su pedido se calcularán y mostrarán al momento de la compra.
                    </p>
                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-4 py-2 font-medium text-gray-900">Método de Envío</th>
                                    <th className="px-4 py-2 font-medium text-gray-900">Tiempo Estimado de Entrega</th>
                                    <th className="px-4 py-2 font-medium text-gray-900">Costo</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="px-4 py-2">Envío Estándar</td>
                                    <td className="px-4 py-2">3 a 5 días hábiles</td>
                                    <td className="px-4 py-2">$99.00 MXN</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Envío Express</td>
                                    <td className="px-4 py-2">1 a 2 días hábiles</td>
                                    <td className="px-4 py-2">$199.00 MXN</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-bubble-dark mb-3">Recogida en Tienda</h2>
                    <p>
                        Puede evitar los costos de envío con la recogida local gratuita. Después de realizar su pedido y seleccionar
                        la recogida local al momento de pagar, su pedido será preparado y estará listo para recoger dentro de 1 a 2 días hábiles.
                        Le enviaremos un correo electrónico cuando su pedido esté listo junto con las instrucciones.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-bubble-dark mb-3">Cómo verificar el estado de su pedido</h2>
                    <p>
                        Cuando su pedido haya sido enviado, recibirá una notificación por correo electrónico de nuestra parte
                        que incluirá un número de seguimiento que podrá utilizar para consultar su estado. Por favor permita
                        48 horas para que la información de seguimiento esté disponible.
                    </p>
                </section>
            </div>
        </div>
    )
}
