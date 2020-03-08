import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import useScript, { ScriptStatus } from '@charlietango/use-script';
import { get } from 'lodash';

import { googlePlacesApiKey } from '~/config/env';

const AddressInput = ({ className, name, onSelect }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const inputRef = useRef(null);

  const [ready, status] = useScript(
    `https://maps.googleapis.com/maps/api/js?key=${googlePlacesApiKey}&libraries=places`,
  );

  const findAddressComponentByType = (components = [], type) =>
    components.find((ac) => ac.types.find((t) => t === type));

  useEffect(() => {
    if (ready && status === ScriptStatus.READY && !autocomplete) {
      setAutocomplete(
        new window.google.maps.places.Autocomplete(inputRef.current, {
          componentRestrictions: { country: 'VN' },
          fields: [
            'address_components',
            'adr_address',
            'formatted_address',
            'geometry',
          ],
          type: ['address', 'establishment'],
        }),
      );

      // autocomplete
    }
  }, [autocomplete, ready, status]);

  useEffect(() => {
    const handlePlaceChanged = () => {
      const place = autocomplete.getPlace();

      // console.log(place);

      const city = get(
        findAddressComponentByType(
          place.address_components,
          'administrative_area_level_1',
        ),
        'long_name',
      );

      // console.log(city);

      const district = get(
        findAddressComponentByType(
          place.address_components,
          'administrative_area_level_2',
        ),
        'long_name',
      );

      onSelect({
        city,
        district,
        address_html: place.adr_address,
        address_full: place.formatted_address,

        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      });
    };

    if (autocomplete) {
      autocomplete.addListener('place_changed', handlePlaceChanged);
    }
  }, [autocomplete, onSelect]);

  return (
    <input
      className={cx(className, 'form-control')}
      name={name}
      ref={inputRef}
      type="text"
    />
  );
};

export default AddressInput;