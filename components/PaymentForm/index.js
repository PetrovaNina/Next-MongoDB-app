import { useForm } from "@mantine/form";
import {
  Button,
  Box,
  Group,
  NumberInput,
  PasswordInput,
  TextInput,
} from "@mantine/core";

import s from "./PaymentForm.module.scss";

export default function PaymentForm() {
  const preventNotDigitInput = (e) => {
    /^\D{1}$/g.test(e.key) && e.preventDefault();
  };

  const filterPastedValue = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("Text");
    const onlyDigits = text.replace(/\D/g, "");
    return onlyDigits;
  };

  const addSlash = (value, mass) => {
    return value.length === 2
      ? value + "/"
      : mass && value.length > 2 && value[2] !== "/"
      ? value.slice(0, 2) + "/" + value.slice(2)
      : value;
  };

  const addNewValue = (e, callback) => {
    const { id, value, maxLength } = e.target;
    const pastedValue = callback(e) || "";
    const newValue =
      id === "Expiration Date"
        ? addSlash(value + pastedValue, pastedValue)
        : value + pastedValue;

    form.setFieldValue(id, newValue.slice(0, maxLength));
  };

  const form = useForm({
    validate: {
      "Card Number": (val) =>
        /^\d{16}$/.test(val) ? null : "Card Number should have 16 digits",
      "Expiration Date": (val) =>
        /^\d{2}\/\d{4}$/.test(val) && val.match(/^\d{2}/)[0] > 12
          ? "Invalid month"
          : /^\d{2}\/\d{4}$/.test(val)
          ? null
          : "Invalid date",

      CVV: (val) => (/^\d{3}$/.test(val) ? null : "CVV should have 3 digits"),
      Amount: (val) => (val <= 0 ? "Invalid amount" : null),
    },
    initialValues: {
      "Card Number": "",
      "Expiration Date": "",
      CVV: "",
      Amount: undefined,
    },
  });

  return (
    <Box sx={{ width: "100%", maxWidth: 340 }} mx="auto">
      <form
        className={s.form}
        onSubmit={form.onSubmit((values) => {
          fetch("/api/payment", {
            method: "POST",
            body: JSON.stringify(values),
          });
        })}
        onKeyPress={(e) => addNewValue(e, preventNotDigitInput)}
        onPaste={(e) => addNewValue(e, filterPastedValue)}
        onBlur={(e) => form.validateField(e.target.id)}
      >
        <TextInput
          required
          id="Card Number"
          label="Card Number"
          placeholder="1234 5678 9123 4567"
          mt="sm"
          maxLength={16}
          {...form.getInputProps("Card Number")}
        />

        <TextInput
          required
          id="Expiration Date"
          label="Expiration Date"
          placeholder="MM / YYYY"
          mt="sm"
          maxLength={7}
          {...form.getInputProps("Expiration Date")}
        />
        <PasswordInput
          required
          id="CVV"
          label="CVV"
          placeholder="Card CVV"
          mt="sm"
          maxLength={3}
          pattern="[0-9]{3}"
          autoComplete="cc-number"
          sx={() => ({
            ".mantine-PasswordInput-input": {
              boxShadow: "-1px 1px 3px #40687987",
            },
          })}
          {...form.getInputProps("CVV")}
        />
        <NumberInput
          required
          id="Amount"
          label="Amount"
          placeholder="Type an amount"
          mt="sm"
          hideControls={true}
          {...form.getInputProps("Amount")}
        />

        <Group position="center" mt="xl">
          <Button
            type="submit"
            className={s.button}
            disabled={
              !!Object.keys(form.errors).length ||
              Object.values(form.values).some((val) => !val)
            }
          >
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
}
