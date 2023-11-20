# Build and Publish Steps

1. Open a command prompt the '\workspaces\lib' directory.
1. Run the command 'npm run test-lib' - verify all tests pass.
1. Run the command 'npm run lint-lib' - verify there are no errors.
1. Run the command 'npm run build-lib'
1. Navigate to the 'dist\ngx-simple-material-table' directory.
1. Run the command 'npm publish --dry-run' - verify the output is as expected.
1. Run the command 'npm publish'.
    1. To publish a pre-release version, include '--tag next'.
