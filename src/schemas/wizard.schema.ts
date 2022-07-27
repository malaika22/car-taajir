import { wizardConstants } from '@/utils/constant';
import * as yup from 'yup';

export function checkIfFilesAreTooBig(files?: [File]): boolean {
  let valid = true;
  if (files) {
    files.map((file) => {
      const size = file.size / 1024 / 1024;
      if (size > 10) {
        valid = false;
      }
    });
  }
  return valid;
}

export function checkIfFilesAreCorrectType(files?: [File]): boolean {
  let valid = true;
  if (files) {
    files.map((file) => {
      if (!['application/pdf', 'image/jpeg', 'image/png'].includes(file.type)) {
        valid = false;
      }
    });
  }
  return valid;
}

export const wizardSchema = yup.object({
  basicInformation: yup.object({
    city: yup.string().oneOf(wizardConstants.cities).required('Required'),
    carInfo: yup.object({
      modelYear: yup
        .string()
        .oneOf(wizardConstants.modelYear)
        .required('Required'),
      make: yup.string().oneOf(wizardConstants.make).required('Required!'),
      model: yup.string().oneOf(wizardConstants.model).required('Required!'),
      version: yup
        .string()
        .oneOf(wizardConstants.versions)
        .required('Required!'),
    }),
    registeredIn: yup.string().oneOf(wizardConstants.resgisteredCities),
    exteriorColor: yup
      .string()
      .oneOf(wizardConstants.exteriorColors)
      .required('Required!!'),
    milage: yup.number().required('Required!!'),
    price: yup.number().required('Required!!'),
    description: yup
      .string()
      .min(10, 'Description is too short')
      .required('Required!!'),
  }),
  uploadPictures: yup.object({
    files: yup
      .array()
      .nullable()
      .required('Required!!')
      .test('is-correct-file', 'VALIDATION_FIELD_FILE_BIG', (values) => {
        let valid = true;
        if (values) {
          values.map((file) => {
            const size = file.size / 1024 / 1024;
            if (size > 10) {
              valid = false;
            }
          });
        }
        return valid;
      }),
  }),
  additionalInformation: yup.object({
    engineType: yup
      .string()
      .oneOf(wizardConstants.engineType)
      .required('Required!!'),
    engineCapacity: yup
      .string()
      .min(4, 'Enter valid engine capacity')
      .required('Required!!'),
    transmission: yup
      .string()
      .oneOf(wizardConstants.transmission)
      .required('Required!!'),
    assembly: yup
      .string()
      .oneOf(wizardConstants.assembly)
      .required('Required!!'),
    features: yup
      .array()
      .min(1)
      .of(yup.string().required())
      .required('Required!!'),
  }),
});

export type WizardSchema = yup.InferType<typeof wizardSchema>;

export type PagesWizard =
  | 'basicInformation'
  | 'uploadPicture'
  | 'additionalInformation'
  | 'verifyNumber';
