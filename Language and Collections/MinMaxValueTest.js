function main() {
    const maxByte = 127;
    const minByte = -128;
    const maxShort = 32767;
    const minShort = -32768;
    const maxInteger = 2147483647;
    const minInteger = -2147483648;
    const maxLong = 9223372036854775807;
    const minLong = -9223372036854775808;
    const maxFloat = 3.4028235E38;
    const minFloat = 1.4E-45;
    const maxDouble = 1.7976931348623157E308;
    const minDouble = 4.9E-324;
    console.info(`Range of byte :: ${minByte} to ${maxByte}.`);
    console.info(`Range of short :: ${minShort} to ${maxShort}.`);
    console.info(`Range of integer :: ${minInteger} to ${maxInteger}.`);
    console.info(`Range of long :: ${minLong} to ${maxLong}.`);
    console.info(`Range of float :: ${minFloat} to ${maxFloat}.`);
    console.info(`Range of double :: ${minDouble} to ${maxDouble}.`);
};

main();
