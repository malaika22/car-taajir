import { wizardConstants } from 'utils/constant';
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
    city: yup
      .string()
      .oneOf(wizardConstants.cities)
      .required('City is required!'),
    // carInfo: yup.object({
    //   modelYear: yup
    //     .string()
    //     .oneOf(wizardConstants.modelYear)
    //     .required('Required'),
    //   make: yup.string().oneOf(wizardConstants.make).required('Required!'),
    //   model: yup.string().oneOf(wizardConstants.model).required('Required!'),
    //   version: yup
    //     .string()
    //     .oneOf(wizardConstants.versions)
    //     .required('Required!'),
    // }),
    registeredIn: yup.string().oneOf(wizardConstants.resgisteredCities),
    exteriorColor: yup
      .string()
      .oneOf(wizardConstants.exteriorColors)
      .required('Exterior color is required!'),

    milage: yup
      .number()
      .typeError('Milage should be a number')
      .required('Milage is required!'),
    price: yup
      .number()
      .typeError('Price should be a number')
      .required('Price is required!'),
    description: yup
      .string()
      // .min(10, 'Description is too short')
      .required('Description!'),
  }),
  uploadPictures: yup.object({
    files: yup
      .array()
      .min(2, 'Images should be more than 2')
      .max(8, "Can't upload more than 7 images")
      .required('Images is required!')
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
      .required('Engine type is required!'),
    engineCapacity: yup
      .string()
      .min(4, 'Enter valid engine capacity')
      .required('Engine capacity is required!'),
    transmission: yup
      .string()
      .oneOf(wizardConstants.transmission)
      .required('Transmission is required!'),
    assembly: yup
      .string()
      .oneOf(wizardConstants.assembly)
      .required('Assembly is required!'),
    features: yup
      .array()
      .min(1)
      .of(yup.string().required())
      .required('Atlest select on features'),
  }),
});

export type WizardSchema = yup.InferType<typeof wizardSchema>;

export type PagesWizard =
  | 'basicInformation'
  | 'uploadPicture'
  | 'additionalInformation'
  | 'verifyNumber';
