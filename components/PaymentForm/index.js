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
    /^[^\d]{1}$/g.test(e.key) && e.preventDefault();
  };

  const form = useForm({
    validate: {
      "Card Number": (val) =>
        /\d{16}/.test(val) ? null : "Card Number should have 16 digits",
      "Expiration Date": (val) =>
        val.slice(0, 2) > 12
          ? "Invalid month"
          : val.length < 6
          ? "Invalid year"
          : null,
      CVV: (val) => (/\d{3}/.test(val) ? null : "CVV should have 3 digits"),
    },
    initialValues: {
      "Card Number": null,
      "Expiration Date": null,
      CVV: null,
      Amount: null,
    },
  });

  return (
    <Box sx={{ width: "100%", maxWidth: 340 }} mx="auto">
      <form
        className={s.form}
        onSubmit={form.onSubmit((values) => console.log(values))}
        onKeyDown={preventNotDigitInput}
      >
        <TextInput
          required
          label="Card Number"
          placeholder="1234 5678 9123 4567"
          mt="sm"
          maxLength={16}
          {...form.getInputProps("Card Number")}
        />

        <TextInput
          required
          label="Expiration Date"
          placeholder="MM / YYYY"
          mt="sm"
          maxLength={6}
          {...form.getInputProps("Expiration Date")}
        />
        <PasswordInput
          required
          label="CVV"
          placeholder="Card CVV"
          mt="sm"
          maxLength={3}
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
          label="Amount"
          placeholder="Type an amount"
          mt="sm"
          hideControls={true}
          {...form.getInputProps("Amount")}
        />

        <Group position="center" mt="xl">
          <Button type="submit" className={s.button} disabled>
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
}
