

export default function RefundPolicyPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-heading font-bold text-bubble-dark mb-8">Política de Reembolso y Devoluciones</h1>

      <div className="prose prose-bubble max-w-none text-bubble-gray space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-bubble-dark mb-3">Visión General</h2>
          <p>
            Nuestra política de devolución tiene una duración de 30 días. Si han pasado 30 días desde su compra,
            desafortunadamente no podemos ofrecerle un reembolso o cambio.
          </p>
          <p>
            Para ser elegible para una devolución, su artículo debe estar sin usar y en las mismas condiciones en que lo recibió.
            También debe estar en el embalaje original.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-bubble-dark mb-3">Artículos No Retornables</h2>
          <p>
            Varios tipos de bienes están exentos de ser devueltos. Los productos perecederos tales como alimentos, flores,
            periódicos o revistas no pueden ser devueltos. Tampoco aceptamos productos que sean bienes íntimos o sanitarios,
            materiales peligrosos, o líquidos o gases inflamables.
          </p>
          <p>Artículos adicionales no retornables:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tarjetas de regalo</li>
            <li>Productos de software descargables</li>
            <li>Algunos artículos de salud y cuidado personal</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-bubble-dark mb-3">Reembolsos (si corresponde)</h2>
          <p>
            Una vez que su devolución es recibida e inspeccionada, enviaremos un correo electrónico para notificarle que hemos recibido
            su artículo devuelto. También le notificaremos la aprobación o rechazo de su reembolso.
          </p>
          <p>
            Si es aprobado, entonces su reembolso será procesado y un crédito será automáticamente aplicado a su tarjeta de crédito
            o método original de pago, dentro de una cierta cantidad de días.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-bubble-dark mb-3">Envío</h2>
          <p>
            Para devolver su producto, debe enviarlo por correo a nuestra dirección física.
          </p>
          <p>
            Usted será responsable de pagar sus propios costos de envío para devolver su artículo.
            Los costos de envío no son reembolsables. Si recibe un reembolso, el costo del envío de devolución
            se deducirá de su reembolso.
          </p>
        </section>
      </div>
    </div>
  )
}
