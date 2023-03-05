import React, { ElementType } from "react";
import { Box, HStack, Stack, Icon, Text, StackProps } from "@chakra-ui/react";
import {
    MoneyBackGuaranteeIcon,
    HassleFreeIcon,
    MonthlySubscriptionIcon,
} from "../icons/Icons";

interface FeatureProps extends StackProps {
    icon: ElementType;
}

function Feature(props: FeatureProps) {
    const { icon, children, ...rest } = props;
    return (
        <HStack {...rest} spacing="6" align='start'>
            <Icon as={icon} boxSize={['8', '8', '12']} />
            <Text fontSize="lg" fontWeight="bold" textAlign="left">
                {children}
            </Text>
        </HStack>
    );
}

export function Features() {
    return (
        <Box as='section' maxW="1024px" m="auto" pt="60px" pb="8" >
            <Stack px="12" spacing={['6', '6', '5']} direction={['column', 'column', 'row']} >
                <Feature icon={MoneyBackGuaranteeIcon}>
                    30 days money back Guarantee
                </Feature>
                <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
                <Feature icon={MonthlySubscriptionIcon}>
                    No Monthly subscription Pay once and for all
                </Feature>
            </Stack>
        </Box>
    );
}
