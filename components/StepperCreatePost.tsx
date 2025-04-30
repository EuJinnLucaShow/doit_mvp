"use client";

import * as React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TitleIcon from "@mui/icons-material/Title";
import SubjectIcon from "@mui/icons-material/Subject";
import SaveIcon from "@mui/icons-material/Save";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useCreatePostMutation } from "@/lib/services/postsApi";
import { Post } from "@/lib/types/post";

const steps = ["Заголовок", "Тіло", "Попередній перегляд"];

const validationSchema = Yup.object({
  title: Yup.string().required("Обов'язково"),
  body: Yup.string().required("Обов'язково"),
});

export default function StepperCreatePost() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const [createPost] = useCreatePostMutation();

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  const handleSubmitForm = async (
    values: Partial<Post>,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      setIsDeleting(true);
      await createPost(values).unwrap();
      setIsDeleting(false);
      setOpenSnackbar(true);
      resetForm();
      handleReset();
    } catch (err) {
      console.error("Помилка при створенні поста", err);
    }
  };

  return (
    <Formik
      initialValues={{ title: "", body: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmitForm}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => {
        const isNextDisabled =
          (activeStep === 0 && (!values.title || !!errors.title)) ||
          (activeStep === 1 && (!values.body || !!errors.body));

        return (
          <Form style={{ width: "clamp(300px, 100%, 800px)" }}>
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <React.Fragment>
                <Box sx={{ mt: 3 }}>
                  {activeStep === 0 && (
                    <TextField
                      fullWidth
                      label="Заголовок"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.title && Boolean(errors.title)}
                      helperText={touched.title && errors.title}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <TitleIcon />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  )}

                  {activeStep === 1 && (
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Тіло поста"
                      name="body"
                      value={values.body}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.body && Boolean(errors.body)}
                      helperText={touched.body && errors.body}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <SubjectIcon />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  )}
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Назад
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />

                  {activeStep < steps.length ? (
                    <Button
                      disabled={isNextDisabled}
                      variant="contained"
                      onClick={handleNext}
                      endIcon={<ArrowForwardIosIcon />}
                    >
                      Далі
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<SaveIcon />}
                      loading={isDeleting}
                    >
                      Зберегти
                    </Button>
                  )}
                </Box>

                <Dialog open={activeStep === 2} onClose={handleBack} fullWidth>
                  <DialogTitle>Попередній перегляд</DialogTitle>
                  <DialogContent dividers>
                    <Typography variant="h6" gutterBottom>
                      {values.title}
                    </Typography>
                    <Typography variant="body1">{values.body}</Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleBack}>Редагувати</Button>
                    <Button variant="contained" onClick={handleNext}>
                      Підтвердити
                    </Button>
                  </DialogActions>
                </Dialog>

                <Snackbar
                  open={openSnackbar}
                  autoHideDuration={3000}
                  onClose={() => setOpenSnackbar(false)}
                  message="Пост успішно створено!"
                />
              </React.Fragment>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}
