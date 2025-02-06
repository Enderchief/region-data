#!/bin/bash

cd data
for short in ab bc mb nb nl ns nt nu on pe qc sk yt; do
    if [ ! -f $short.zip ]; then
        wget -O $short.zip "https://ftp.cartes.canada.ca/pub/nrcan_rncan/vector/geobase_cgn_toponyme/prov_csv_eng/cgn_${short}_csv_eng.zip"
        continue
    fi
    unzip $short.zip
done
cd -
