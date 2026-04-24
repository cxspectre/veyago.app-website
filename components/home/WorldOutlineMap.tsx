"use client";

import { useMemo } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection } from "geojson";
import type { Topology } from "topojson-specification";
import countriesJson from "world-atlas/countries-110m.json";
import landJson from "world-atlas/land-110m.json";

const VB = { w: 960, h: 480 };

export default function WorldOutlineMap() {
  const { landD, countryPaths } = useMemo(() => {
    const landTopo = landJson as unknown as Topology;
    const countriesTopo = countriesJson as unknown as Topology;

    const landFeat = feature(landTopo, landTopo.objects.land) as Feature;
    const countriesFeat = feature(countriesTopo, countriesTopo.objects.countries) as FeatureCollection;

    const projection = geoNaturalEarth1().fitSize([VB.w, VB.h], landFeat);
    const path = geoPath(projection);

    const landD = path(landFeat) ?? "";
    const countryPaths = countriesFeat.features
      .map((f, i) => {
        const name = (f.properties as { name?: string } | null)?.name;
        const id = f.id != null ? String(f.id) : name ?? `c-${i}`;
        const d = path(f) ?? "";
        return d ? { id: `${id}-${i}`, d } : null;
      })
      .filter((x): x is { id: string; d: string } => x !== null);

    return { landD, countryPaths };
  }, []);

  return (
    <div className="absolute inset-0 bg-[#040b14]">
      <svg
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        aria-hidden
      >
        <rect width={VB.w} height={VB.h} fill="#040b14" />
        {/* Landmass — reads as continents */}
        <path d={landD} fill="rgba(255,255,255,0.045)" stroke="none" />
        {/* Country borders */}
        {countryPaths.map(({ id, d }) => (
          <path
            key={id}
            d={d}
            fill="none"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth={0.55}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}
