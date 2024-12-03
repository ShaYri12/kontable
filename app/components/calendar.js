export default function Calendar() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Calendrier 2025</h3>
        <button className="text-gray-400 hover:text-gray-600">•••</button>
      </div>

      <div className="space-y-4">
        <div className="border-b border-gray-100 pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">20 May, 2024</span>
            <button className="text-gray-400 hover:text-gray-600">•••</button>
          </div>
          <h4 className="font-medium mb-1">
            Ouverture de Kontable a partir du 1er Fevrier 2025
          </h4>
          <p className="text-sm text-gray-500">2:30 PM - 3:30 PM</p>
          <div className="mt-2 bg-blue-600 rounded-lg p-4">
            <div className="text-white text-lg font-semibold mb-1">FÉVRIER</div>
            <div className="text-white/80 text-sm">
              CONTRIBUTIONS CONVENTIONNELLES COMPLÉMENTAIRES À LA FORMATION &
              PARITARISME
            </div>
          </div>
          <div className="mt-2 flex gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
              Status Here
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
              Status Here
            </span>
          </div>
        </div>

        <div className="border-b border-gray-100 pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">20 May, 2024</span>
            <button className="text-gray-400 hover:text-gray-600">•••</button>
          </div>
          <h4 className="font-medium mb-1">
            Rendez-vous de suivi de 15 min par telephone ou en visio courant
            Fevrier 2025
          </h4>
          <p className="text-sm text-gray-500">2:30 PM - 3:30 PM</p>
          <div className="mt-2">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
              Status Here
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">20 May, 2024</span>
            <button className="text-gray-400 hover:text-gray-600">•••</button>
          </div>
          <h4 className="font-medium mb-1">
            Ouverture de Soltea a partir du lundi 26 Mai 2025
          </h4>
          <p className="text-sm text-gray-500">2:30 PM - 3:30 PM</p>
          <div className="mt-2 bg-blue-100 rounded-lg p-4">
            <div className="text-blue-800 text-lg font-semibold mb-1">MARS</div>
            <div className="text-blue-600 text-sm">
              FLÉCHAGE DU SOLDE DE LA TAXE D'APPRENTISSAGE SOLTÉA 2024
            </div>
          </div>
          <div className="mt-2 flex gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
              Status Here
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
              Status Here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
