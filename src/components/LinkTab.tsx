import { Link, HStack, Box } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

export default function LinkTab(props: any) {
  const { paths, ...rest } = props;
  const navigate = useNavigate();

  return (
    <Box w="100%">
      <HStack gap={0}>
        {Object.keys(paths)
          .filter((v) => paths[v] != null)
          .map((key) => (
            <Link
              onClick={(e) => e.preventDefault()}
              onMouseDown={(e) => navigate(paths[key], { replace: true })}
              flex={1}
              textAlign="center"
              variant="tab"
              {...rest}
              key={key}
              as={NavLink}
              to={paths[key]}
            >
              {key}
            </Link>
          ))}
      </HStack>
    </Box>
  );
}
