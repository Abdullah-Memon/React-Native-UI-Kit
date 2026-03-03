import commonStyles from "@/assets/common.style";
import InputField from "@/components/form/input";
import DateInput from "@/components/form/input/date";
import DropdownInput from "@/components/form/input/dropdown";
import SecretInput from "@/components/form/input/secret";
import Typography from "@/components/form/Typography";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function InputShowcaseScreen() {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pin, setPin] = React.useState("");
  const [dob, setDob] = React.useState(null);
  const [country, setCountry] = React.useState("");

  const countryOptions = React.useMemo(
    () => [
      { label: "Pakistan", value: "pk" },
      { label: "United Arab Emirates", value: "uae" },
      { label: "Saudi Arabia", value: "sa" },
      { label: "United Kingdom", value: "uk" },
      { label: "United States", value: "us" },
      { label: "Canada", value: "ca" },
      { label: "Germany", value: "de" },
      { label: "Australia", value: "au" },
    ],
    [],
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Typography variant="h4" style={styles.section}>
          Text Input
        </Typography>

        <InputField
          label="Full Name"
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
          isRequired
          info="This field is mandatory."
          icon={{ start: "👤" }}
        />

        <InputField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="example@mail.com"
          regex="^[\\w.-]+@[\\w.-]+\\.[A-Za-z]{2,}$"
          regexErrorMessage="Please enter a valid email address."
          info="Allowed format: name@domain.com"
          validateOnChange
          icon={{ start: "✉️", end: "✅" }}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <InputField
          label="Phone Number"
          value={phone}
          onChangeText={setPhone}
          placeholder="03XXXXXXXXX"
          regex="^03[0-9]{9}$"
          regexErrorMessage="Use Pakistani mobile format: 03XXXXXXXXX"
          info="Only digits are allowed with 11 length."
          validateOnChange
          icon={{ start: "📱" }}
          keyboardType="phone-pad"
        />

        <InputField
          label="Username"
          value={username}
          onChangeText={setUsername}
          placeholder="letters, numbers, underscore"
          regex="^[a-zA-Z0-9_]{4,16}$"
          regexErrorMessage="Username must be 4-16 characters, no spaces."
          info="Example: abdullah_123"
          icon={{ start: "@" }}
          autoCapitalize="none"
        />

        <InputField
          label="Search"
          value={search}
          onChangeText={setSearch}
          placeholder="Search here..."
          info="Optional field with start/end icons"
          icon={{ start: "🔎", end: "⌫" }}
        />

        <Typography variant="h4" style={styles.section}>
          Secret Input
        </Typography>

        <SecretInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          isRequired
          regex="^(?=.*[A-Za-z])(?=.*\\d).{8,}$"
          regexErrorMessage="Minimum 8 chars with at least 1 letter and 1 number."
          info="Toggle eye icon to show/hide password."
          icon={{ start: "🔐" }}
          isShowPasswordAllowed
        />

        <SecretInput
          label="PIN"
          value={pin}
          onChangeText={setPin}
          placeholder="4-digit PIN"
          regex="^\\d{4}$"
          regexErrorMessage="PIN must be exactly 4 digits."
          keyboardType="number-pad"
          info="Visibility toggle disabled for PIN field."
          icon={{ start: "#" }}
          isShowPasswordAllowed={false}
        />

        <Typography variant="h4" style={styles.section}>
          Date Input
        </Typography>

        <DateInput
          label="Date of Birth"
          value={dob}
          onChange={setDob}
          isRequired
          info="Tap field to open date picker."
          minimumDate={new Date(1950, 0, 1)}
          maximumDate={new Date()}
        />

        <Typography variant="h4" style={styles.section}>
          Dropdown Input
        </Typography>

        <DropdownInput
          label="Country"
          value={country}
          onValueChange={setCountry}
          options={countryOptions}
          isRequired
          searchable
          maxHeight={220}
          placeholder="Select your country"
          searchPlaceholder="Search country..."
          info="Search enabled with max dropdown height."
          icon={{ start: "🌍" }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ...commonStyles,
});
