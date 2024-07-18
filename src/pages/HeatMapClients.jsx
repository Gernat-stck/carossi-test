import React from 'react'
import MapMarkersLoader from '../components/MapMarkersLoader'
import GoogleHeatMap from '../components/GoogleHeatMap'

export default function HeatMapClients() {
  return (
<MapMarkersLoader>
{(markers) => <GoogleHeatMap markers={markers} />}

</MapMarkersLoader>  )
}
