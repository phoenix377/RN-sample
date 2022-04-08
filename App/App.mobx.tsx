import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import {
  BUTTON_CONTAINER,
  CONTAINER,
  ERROR_TEXT,
  SCROLL_CONTAINER,
  TITLE,
  TITLE_DARK,
} from './App.styles';
import Button from './Components/Button';
import Input from './Components/Input';
import Select from './Components/Select';
import { useStore } from './Hooks/useStore';
import {
  feetToMeters,
  isNumber,
  kilosToLbs,
  lbsToKilos,
  metersToFeet,
} from './utils';

const UNITS = {
  imperial: {
    weight: 'lbs',
    height: 'ft',
  },
  metric: {
    weight: 'kg',
    height: 'm',
  },
};

type FormData = {
  weight: string;
  height: string;
  unit: 'imperial' | 'metric';
};

const AppMobX = observer(() => {
  const store = useStore();
  const [unitType, setUnitType] = React.useState<'imperial' | 'metric'>(
    'imperial',
  );

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#c8e6c9',
    flex: 1,
    paddingHorizontal: 20,
  };

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      weight: '',
      height: '',
      unit: 'imperial',
    },
  });

  useEffect(() => {
    store.loadData().then(() => {
      if (store.data) {
        const { data } = store;
        reset({
          height: data.height,
          weight: data.weight,
          unit: data.unit,
        });
        setUnitType(data.unit);
      }
    });
  }, [reset, store]);

  console.log(store.data);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === 'unit' && value.unit && value.weight && value.height) {
        console.log({ name, type, value });
        if (value.unit !== unitType) {
          const newWeight =
            value.unit === 'imperial'
              ? kilosToLbs(value.weight)
              : lbsToKilos(value.weight);

          const newHeight =
            value.unit === 'imperial'
              ? metersToFeet(value.height)
              : feetToMeters(value.height);

          setUnitType(value.unit);
          setValue('weight', newWeight.toString());
          setValue('height', newHeight.toString());
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, unitType, setValue]);

  const onSubmit = (data: FormData) => {
    store.setData(data);
    store.writeData();
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={SCROLL_CONTAINER}
      >
        <View style={CONTAINER}>
          <Text style={isDarkMode ? TITLE_DARK : TITLE}>
            Unit converter (with MobX)
          </Text>
          <Controller
            control={control}
            rules={{
              required: true,
              validate: isNumber,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
                label={UNITS[unitType]?.weight}
                error={!!errors.weight}
              />
            )}
            name="weight"
          />
          {errors.weight && (
            <Text style={ERROR_TEXT}>
              {(errors?.weight?.type === 'validate' &&
                'Please enter a number') ||
                'This is a required field'}
            </Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
              validate: isNumber,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType="numeric"
                value={value}
                label={UNITS[unitType]?.height}
                error={!!errors.height}
              />
            )}
            name="height"
          />
          {errors.height && (
            <Text style={ERROR_TEXT}>
              {(errors?.height?.type === 'validate' &&
                'Please enter a number') ||
                'This is a required field'}
            </Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select value={value} onChange={onChange} />
            )}
            name="unit"
          />
          <View style={BUTTON_CONTAINER}>
            <Button onPress={handleSubmit(onSubmit)}>Save to disk</Button>
          </View>
          <View style={BUTTON_CONTAINER}>
            <Button
              small
              clear
              onPress={() => {
                reset({ height: '', weight: '', unit: 'imperial' });
                setUnitType('imperial');
                store.deleteData();
              }}
            >
              Reset
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default AppMobX;
